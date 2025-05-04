// 偏好設定 3 項不可重複事件函數
export function updateOptions(selects) {
    const selectedValues = Array.from(selects).map(sel => sel.value);

    selects.forEach(select => {
        const currentValue = select.value;
        const options = select.querySelectorAll('option');

        options.forEach(option => {
            if (option.value === "" || option.value === currentValue) {
                option.disabled = false;
            } else {
                option.disabled = selectedValues.includes(option.value);
            }
        });
    });
}

export function validateName(nameTxt, errorTxt) {
    const trimmed = nameTxt.value.trim();

    if (trimmed === "") {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「姓名」欄位不可為空";
        nameTxt.focus();
        return true;
    }

    const validRegex = /^[\u4e00-\u9fa5a-zA-Z0-9]+$/;
    if (!validRegex.test(trimmed)) {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「姓名」只能包含中英文，不能有數字或特殊符號";
        nameTxt.focus();
        return true;
    }

    if (trimmed.length < 2 || trimmed.length > 5) {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「姓名」必須是 2 到 5 個字（中英文混合）";
        nameTxt.focus();
        return true;
    }

    errorTxt.classList.remove("visibility");
    return false;
}

export function validateEmail(emailTxt, errorTxt) {
    const trimmed = emailTxt.value.trim();

    if (trimmed === "") {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「Email」欄位不可為空";
        emailTxt.focus();
        return true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmed)) {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「Email」格式不正確，請重新輸入";
        emailTxt.focus();
        return true;
    }

    errorTxt.classList.remove("visibility");
    return false;
}

export function validatePassword(passwordTxt, errorTxt) {
    const trimmed = passwordTxt.value.trim();

    if (trimmed === "") {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「密碼」欄位不可為空";
        passwordTxt.focus();
        return true;
    }

    if (trimmed.length < 8 || trimmed.length > 32) {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「密碼」長度需為 8 到 32 字元";
        passwordTxt.focus();
        return true;
    }

    const validCharsRegex = /^[A-Za-z0-9]+$/;
    if (!validCharsRegex.test(trimmed)) {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「密碼」只能包含英文字母與數字，不能有空格或特殊符號";
        passwordTxt.focus();
        return true;
    }

    const hasUpper = /[A-Z]/.test(trimmed);
    const hasLower = /[a-z]/.test(trimmed);
    const hasNumber = /[0-9]/.test(trimmed);

    if (!hasUpper || !hasLower || !hasNumber) {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「密碼」需包含英文大小寫與數字";
        passwordTxt.focus();
        return true;
    }

    errorTxt.classList.remove("visibility");
    return false;
}

export function checkSelections(selects, errorTxt) {
    const allSelected = Array.from(selects).every(select => select.value !== "");

    if (allSelected) {
        errorTxt.classList.remove("visibility");
        return false;
    } else {
        errorTxt.classList.add("visibility");
        errorTxt.textContent = "「偏好設定」欄位請選擇完整，謝謝。";
        return true;
    }
}

export function checkLoginStatus() {
    const token = localStorage.getItem("authToken");
    const picture = localStorage.getItem("userPicture");
    const name = localStorage.getItem("userName");
    const level = localStorage.getItem("levelName");

    const loginBtn = document.querySelector(".login_btn");
    const userDropdown = document.querySelector(".user-dropdown");
    const userMenu = document.querySelector(".dropdown-menu");
    const userPicture = document.getElementById('userPicture');
    const userName = document.getElementById('userName');
    const levelName = document.getElementById('levelName');

    if (token) {
        userPicture.src = picture;
        userName.textContent = `嗨！${name}`;
        levelName.textContent = level;

        loginBtn.style.display = "none";
        userDropdown.style.display = "inline-block";
        userMenu.classList.remove("active");
    } else {
        loginBtn.style.display = "inline-block";
        userDropdown.style.display = "none";
    }
}
