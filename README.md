# ✍️ Text Transformation Editor

A simple and interactive **Text Transformation Editor** built using **HTML, CSS, and JavaScript**.  
This project allows users to edit and format text dynamically, similar to a basic text editor.

---

## 📌 Features

- 📝 Editable text area using `contenteditable`
- 🔠 **Text Formatting Options**
  - Bold
  - Italic
  - Underline
- 📋 **Bullet List Support**
- 🎨 **Font Customization**
  - Change font size using slider
  - Change text color using color picker
  - Change font family using dropdown
- ⚡ Real-time updates on selected text

---

## 🛠️ Technologies Used

- **HTML** – Structure of the editor  
- **CSS** – Styling and layout  
- **JavaScript** – Functionality and text formatting logic  

---

## ⚙️ How It Works

- The editor uses the `contenteditable` attribute to allow users to directly edit text.
- Formatting features (Bold, Italic, Underline, etc.) are implemented using JavaScript's:
  
  ```js
  document.execCommand()
