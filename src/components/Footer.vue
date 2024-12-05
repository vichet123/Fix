<template>
    <footer class="footer">
      <div class="footer-content">
        
        <div class="footer-column">
          <h3>Shopping With Us</h3>
          <ul>
            <li><a href="#">My account</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Size Guide</a></li>
          </ul>
        </div>
  
        
        <div class="footer-column">
          <h3>Contact Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Telegram</a></li>

          </ul>
        </div>
  
        
        <div class="footer-column">
          <h3>About Us</h3>
          <ul>
            <li><a href="#">Career</a></li>
          </ul>
        </div>
  
        
        <div class="footer-column">
          <h3>Accepted Payment Methods</h3>
          <ul>
            <li>ABA Pay</li>
            <li>KHQR</li>
            <li>MasterCard</li>
            <li>Visa</li>
          </ul>
        </div>
      </div>
  
      <div class="footer-bottom">
        <p>Powered by Team B4</p>
        <p>&copy; 2024 All rights reserved</p>
      </div>
  
    </footer>
  </template>
  
  <script setup>
  // No specific script setup required, as this is a static footer
  </script>
  
  <style scoped>
  .footer {
    background-color: #000;
    color: #fff;
    padding: 20px 10%;
  }
  
  .footer-content {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  
  .footer-column {
    width: 22%;
  }
  
  .footer-column h3 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
  }
  
  .footer-column ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-column ul li {
    margin: 8px 0;
  }
  
  .footer-column ul li a {
    color: #ccc;
    text-decoration: none;
  }
  
  .footer-column ul li a:hover {
    color: #fff;
  }
  
  .footer-bottom {
    text-align: center;
    margin-top: 20px;
  }
  
  .footer-bottom p {
    margin: 5px 0;
  }
    
  </style>
  