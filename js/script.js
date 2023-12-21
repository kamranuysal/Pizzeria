$(document).ready(() => {
  $("#owl-example").owlCarousel({
    items: 4,
    slideSpeed: 800,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 4,
      },
    },
  });
});

// Contact us
let contactName = document.getElementById("contact-name");
let contactEmail = document.getElementById("contact-email");
let contactMessage = document.getElementById("contact-message");

const sendContactForm = (e) => {
  e.preventDefault();

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "kamranuysal1@gmail.com",
    Password: "430B9B589308FFFCC84F891B8F5CFD43EA4C",
    To: "kamranuysal1@gmail.com",
    From: "kamranuysal1@gmail.com",
    Subject: "Request from Pizzeria",
    Body: `
    Name: ${contactName.value}
    <br>
    Email: ${contactEmail.value}
    <br>
    Message:  ${contactMessage.value}
    `,
  }).then((message) => {
    alert(message);

    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
  });
};
