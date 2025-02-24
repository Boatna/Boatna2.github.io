document.addEventListener("DOMContentLoaded", function () {
    // ✅ ฟังก์ชันไฮไลท์เมนูเมื่ออยู่ในหน้านั้น
    let currentPage = window.location.pathname.split("/").pop();
    let navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // เพิ่มคลาส active
        }
    });

    // ✅ เลื่อนหน้าไปที่ "หลักสูตร" เมื่อกดปุ่ม
    let courseBtn = document.querySelector(".btn-primary");
    if (courseBtn) {
        courseBtn.addEventListener("click", function (e) {
            e.preventDefault();
            let courseSection = document.querySelector("#courses");
            if (courseSection) {
                courseSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    }

    // ✅ เมนู Responsive (สำหรับมือถือ)
    let menuToggle = document.createElement("button");
    menuToggle.innerText = "☰ เมนู";
    menuToggle.classList.add("menu-toggle");
    document.querySelector("header .container").prepend(menuToggle);

    menuToggle.addEventListener("click", function () {
        document.querySelector("nav ul").classList.toggle("show");
    });

    // ✅ แสดง/ซ่อนป๊อปอัป
    let popup = document.querySelector("#popup");
    if (popup) {
        setTimeout(() => {
            popup.style.display = "flex"; // แสดงป๊อปอัปหลัง 3 วินาที
        }, 3000);

        let popupCloseBtn = document.createElement("button");
        popupCloseBtn.innerText = "ปิด";
        popupCloseBtn.style.marginTop = "10px";
        popupCloseBtn.addEventListener("click", function () {
            popup.style.display = "none";
        });

        document.querySelector("#popup-content").appendChild(popupCloseBtn);
    }

    // ✅ ตรวจสอบฟอร์มสมัครสมาชิก
    let signupForm = document.querySelector("#signup-form");
    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault(); // ป้องกันการรีเฟรชหน้า
            let username = document.querySelector("#username").value;
            let email = document.querySelector("#email").value;
            let password = document.querySelector("#password").value;
            let message = document.querySelector("#responseMessage");

            if (username === "" || email === "" || password === "") {
                message.innerText = "กรุณากรอกข้อมูลให้ครบถ้วน!";
                message.style.color = "red";
            } else {
                message.innerText = "ลงทะเบียนสำเร็จ! 🎉";
                message.style.color = "green";
                signupForm.reset(); // ล้างค่าในฟอร์ม
            }
        });
    }

    // ✅ ปุ่ม Logout
    let logoutButton = document.querySelector("#logoutButton");
    if (logoutButton) {
        logoutButton.addEventListener("click", function () {
            alert("คุณได้ออกจากระบบแล้ว");
            window.location.href = "index.html"; // กลับไปที่หน้าแรก
        });
    }
});
