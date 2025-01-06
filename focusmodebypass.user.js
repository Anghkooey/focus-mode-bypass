// ==UserScript==
// @name          Focus mode Bypass
// @author        Anghkooey
// @namespace     https://github.com/Anghkooey/focus-mode-bypass
// @version       3.0.0
// @description   Prevents websites from detecting tab switches or window unfocus without breaking website functionality
// @include       *
// ==/UserScript==

(() => {
    // Preserve original methods
    const originalRAF = window.requestAnimationFrame;
    const originalSetTimeout = window.setTimeout;
    const originalSetInterval = window.setInterval;
    const originalPerformanceNow = performance.now.bind(performance);
    const originalDateNow = Date.now;
    const originalAddEventListener = window.addEventListener;
    const originalDocumentAddEventListener = document.addEventListener;

    let timeOffset = 0;

    // Emulate constant visibility state
    Object.defineProperty(document, 'visibilityState', { get: () => 'visible' });
    Object.defineProperty(document, 'webkitVisibilityState', { get: () => 'visible' });
    Object.defineProperty(document, 'hidden', { get: () => false });
    document.onvisibilitychange = null;

    // Emulate focus state
    unsafeWindow.onblur = null;
    unsafeWindow.onfocus = null;
    unsafeWindow.document.hasFocus = () => true;

    // Override `requestAnimationFrame` to ensure consistent activity
    window.requestAnimationFrame = (callback) => originalRAF(() => {
        try { callback(originalPerformanceNow()); } catch (e) {}
    });

    // Adjust timers to simulate activity
    window.setTimeout = (callback, delay) => originalSetTimeout(() => {
        try { callback(); } catch (e) {}
    }, Math.max(0, delay));

    window.setInterval = (callback, delay) => originalSetInterval(() => {
        try { callback(); } catch (e) {}
    }, Math.max(0, delay));

    // Offset performance.now and Date.now for consistency
    setInterval(() => {
        timeOffset += 10; // Increment time offset periodically
    }, 100);

    performance.now = () => originalPerformanceNow() + timeOffset;
    Date.now = () => originalDateNow() + timeOffset;

    // Ensure `activeElement` always returns a valid element
    Object.defineProperty(document, 'activeElement', {
        get: () => document.body,
    });

    // Allow essential event listeners but block visibility-related ones
    const blockedEvents = new Set([
        'visibilitychange',
        'webkitvisibilitychange',
        'blur',
        'focus',
        'mouseleave',
        'mouseout',
    ]);

    window.addEventListener = new Proxy(window.addEventListener, {
        apply(target, thisArg, args) {
            if (blockedEvents.has(args[0])) return; // Block specific events
            return originalAddEventListener.apply(thisArg, args);
        },
    });

    document.addEventListener = new Proxy(document.addEventListener, {
        apply(target, thisArg, args) {
            if (blockedEvents.has(args[0])) return; // Block specific events
            return originalDocumentAddEventListener.apply(thisArg, args);
        },
    });

    // Allow only critical MutationObserver changes
    const originalObserver = MutationObserver.prototype.observe;
    MutationObserver.prototype.observe = function (target, options) {
        if (target === document || target === document.documentElement) return;
        return originalObserver.call(this, target, options);
    };

    // Simulate user activity to prevent idle detection
    setInterval(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
        document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a', bubbles: true }));
    }, 10000);
})();
