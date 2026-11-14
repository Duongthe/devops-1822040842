document.getElementById('actionBtn').addEventListener('click', function() {
    const messageElement = document.getElementById('message');
    
    // Hiển thị thông báo thành công
    messageElement.innerText = "🚀 Chào Thế Dương! Website của bạn đã cấu hình CI/CD và sẵn sàng hoạt động.";
    messageElement.style.color = "#27ae60";
    
    // Đổi hiệu ứng và chữ của nút bấm
    this.innerText = "Đã kiểm tra thành công ✓";
    this.style.backgroundColor = "#27ae60";
    this.style.boxShadow = "0 4px 12px rgba(39, 174, 96, 0.4)";
});