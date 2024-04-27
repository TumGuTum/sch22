document.addEventListener("DOMContentLoaded", function() {
    var popup = document.getElementById('demo-popup');
    var overlay = document.getElementById('demo-popup-overlay');
    popup.style.display = 'none'; // Установим начальное состояние на display: none
  
    // Показываем окно и эффект размытия с плавным эффектом
    setTimeout(function() {
      popup.style.display = 'block'; // Показываем окно после небольшой задержки
      overlay.style.display = 'block';
      setTimeout(function() {
        popup.style.opacity = '1'; // Плавно устанавливаем непрозрачность
        overlay.style.opacity = '1';
      }, 50); // Небольшая задержка для плавного эффекта
    }, 100); // Небольшая задержка перед показом для плавного эффекта
  });
  
  function closeDemoPopup() {
    var popup = document.getElementById('demo-popup');
    var overlay = document.getElementById('demo-popup-overlay');
    
    // Плавно скрываем окно и эффект размытия
    popup.style.opacity = '0';
    overlay.style.opacity = '0';
    
    // Через небольшую задержку скрываем окно и эффект размытия полностью
    setTimeout(function() {
      popup.style.display = 'none';
      overlay.style.display = 'none';
    }, 300); // Время анимации в миллисекундах (0.3 секунды)
  }