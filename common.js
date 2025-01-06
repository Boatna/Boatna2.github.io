// ตรวจสอบสถานะผู้ใช้เมื่อโหลดหน้าเว็บ
window.addEventListener('load', () => {
    const savedName = localStorage.getItem('userName');
    const userNameElement = document.getElementById('userName');
    const logoutButton = document.getElementById('logoutButton');

    if (savedName) {
        userNameElement.textContent = `ยินดีต้อนรับ, ${savedName}`;
        logoutButton.style.display = 'inline-block';
    }
});

// ฟังก์ชันออกจากระบบ
function logout() {
    // ลบข้อมูลใน Local Storage
    localStorage.removeItem('userName');

    // รีเฟรชหน้าเว็บ
    window.location.reload();
}
