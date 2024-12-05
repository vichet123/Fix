<template>
    <div>
      <div class="card-wrapper">
        <div class="card">
          <h3 class="title">New Arrivals!!!</h3>
          <p>Get up to 10% for newly imported goods!!!</p>
          <button class="get-code-button" @click="showCode('newArrivalCode')" aria-label="Get New Arrival Code">Get Code here</button>
          <img class="icon" src="@/assets/images/newarrivalicon.jpg" alt="New Arrival Icon" />
        </div>
        <img class="side-image" src="@/assets/images/Sneaker.jpg" alt="Sneaker" />
      </div>
  
      <div class="card-wrapper">
        <div class="card">
          <h3 class="title">Referral Code</h3>
          <p>Refer people and you both get 10% off first purchase!!!</p>
          <button class="get-code-button" @click="showCode('referralCode')" aria-label="Get Referral Code">Get Code here</button>
          <img class="icon" src="@/assets/images/referral.png" alt="Referral Icon" />
        </div>
        <!-- <img class="side-image" src="@/assets/images/referralimage.jpg" alt="Referral Image" /> -->
      </div>
  
      <div v-if="showPopup" class="popup">
        <p>{{ code }}</p>
        <button class="close-button" @click="hidePopup" aria-label="Close Popup">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showPopup: false,
        code: '',
      };
    },
    methods: {
      showCode(codeType) {
        this.showPopup = true;
        if (codeType === 'newArrivalCode') {
          this.code = 'Your code is "ITC2024"';
        } else if (codeType === 'referralCode') {
          this.code = 'Your code is "GICB"';
        }
      },
      hidePopup() {
        this.showPopup = false;
      },
    },
  };
  </script>
  
  <style scoped>
  .card-wrapper {
    display: flex; /* Use flexbox to align card and side image */
    align-items: center; /* Center items vertically */
    margin-bottom: 20px; /* Space between card containers */
  }
  
  .card {
    background-color: grey;
    border: 1px solid grey;
    padding: 20px;
    width: 300px; /* Fixed width for the card */
    border-radius: 10px; /* Rounded edges */
    color: white; /* Set font color to white */
    position: relative; /* Added to position the icon */
  }
  
  .title {
    font-size: 24px; /* Increased font size for titles */
    margin-bottom: 10px; /* Space below the title */
  }
  
  .icon {
    width: 60px; /* Set the width of the icon */
    height: 60px; /* Set the height of the icon */
    position: absolute; /* Positioning the icon */
    bottom: 10px; /* Distance from the bottom */
    right: 10px; /* Distance from the right */
    border-radius: 50%; /* Make the edges round */
    background-color: white; /* Optional: background color for the icon */
    padding: 5px; /* Optional: padding around the icon */
  }
  
  .get-code-button {
    background-color: white; /* White background for the button */
    color: grey; /* Text color for the button */
    border: none; /* Remove default border */
    padding: 5px 10px; /* Smaller padding for a smaller button */
    font-size: 14px; /* Smaller font size */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Change cursor to pointer on hover */
    transition: background-color 0.3s, color 0.3s; /* Smooth transition for hover effect */
  }
  
  .get-code-button:hover {
    background-color: lightgrey; /* Change background on hover */
    color: black; /* Change text color on hover */
  }
  
  .popup {
    border-color: black;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: lightgrey;
    padding: 20px;
    border-radius: 5px;
    z-index: 100;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0. 5); /* Added shadow effect */
  }
  
  .close-button {
    background-color: grey; /* Background color for close button */
    color: white; /* Text color for close button */
    border: none; /* Remove default border */
    padding: 5px 10px; /* Padding for the close button */
    border-radius: 5px; /* Rounded corners */
    cursor: pointer; /* Change cursor to pointer on hover */
  }
  
  .side-image {
    width: 300px; /* Set the width of the side image */
    height: auto; /* Maintain aspect ratio */
    margin-left: 250px; /* Space between card content and side image */
  }
  </style>