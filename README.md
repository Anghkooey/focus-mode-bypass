# 🕵️‍♂️ **_Focus Mode Bypass_**  

**_This script prevents websites from detecting tab switches or window unfocus without breaking website functionality. It emulates constant visibility and focus state, ensuring websites believe you're always active on the tab._**

---

## ✨ **_Features_**

- **_Tab Focus Emulation_**:  
  **_Prevents websites from detecting when you switch tabs or unfocus the window._**

- **_Event Blocking_**:  
  **_Blocks events related to visibility and focus such as `visibilitychange`, `blur`, and `focus`._**

- **_Full Visibility Simulation_**:  
  **_Overrides `document.hidden`, `document.visibilityState`, and `document.hasFocus` to always return visible and focused states._**

- **_Safe Functionality Preservation_**:  
  **_The script ensures website functionality remains intact while performing the spoofing._**

---

## 🚀 **_Installation Guide_**  

### 📌 **_Prerequisites_**
1. **_Install a userscript manager:_**
   - [**_Tampermonkey_**](https://www.tampermonkey.net/) (**_recommended_**)
   - [**_Greasemonkey_**](https://addons.mozilla.org/en-US/firefox/addon/greasemonkey/)

2. **_Ensure you're using a supported browser:_**
   - **_Google Chrome_**
   - **_Mozilla Firefox_**

---

### 📥 **_Installation Steps_**

#### 1. **_Download the Script_**  
**_Click [here](https://github.com/Anghkooey/focus-mode-bypass/raw/main/focus-mode-bypass.user.js) to install the userscript._**

#### 2. **_Add the Script to Tampermonkey_**  
- **_Open Tampermonkey dashboard._**
- **_Click on "Create a new script"._**
- **_Paste the script code into the editor._**
- **_Save the script._**

#### 3. **_Activate the Script_**  
- **_Navigate to the website where you want the spoofing functionality._**
- **_Ensure the script is enabled in Tampermonkey._**

---

## 🎯 **_How It Works_**  

1. **_Overrides `document.hidden`, `document.visibilityState`, and `document.hasFocus` to make the tab appear always focused._**  
2. **_Blocks `visibilitychange`, `blur`, `focus`, and related events to prevent detection of tab switching._**  
3. **_Ensures the site remains functional by blocking only relevant events without interfering with the core user experience._**

---

## ⚠️ **_Disclaimer_**  

**_This script is provided for educational purposes only._**  
- **_Ensure you comply with the terms of service for the websites where you use it._**  
- **_The author is not responsible for misuse or any consequences resulting from the script._**  

---

## 🛠️ **_Contributing_**  

**_We welcome contributions!_**  
**_Feel free to open an issue or submit a pull request for improvements or new features._**

---

## 📜 **_License_**  

**_This project is licensed under the GNU General Public License v3.0._**  
**_See the [LICENSE](./LICENSE) file for details._**

**_You can learn more about the GNU General Public License v3.0 [here](https://www.gnu.org/licenses/gpl-3.0.html)._**

---
