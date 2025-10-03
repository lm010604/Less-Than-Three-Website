<?php
$page_title = "Contact";
?>
<!DOCTYPE html>
<html lang="en">

<?php include('includes/meta.php'); ?>

<body>
  <?php include('includes/header.php'); ?>

  <div class="contact-flex">
    <div class="wide-text">
      <h2>Contact Us</h2>
      <p>
        We welcome any questions you may have about our group, the audition process, or any other related inquiries.
        Don’t hesitate to reach out! For the quickest response, we recommend contacting us through Instagram. We look
        forward to hearing from you!
      </p>
    </div>
    <div class="contact-form">
      <form id="contactForm" action="/contact/confirmation" method="post" novalidate>
        <ul>
          <li>
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Enter Your First Name">
            <div class="field-error" id="err-firstname"></div>
          </li>
          <li>
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Enter Your Last Name">
            <div class="field-error" id="err-lastname"></div>
          </li>
          <li>
            <label for="email">Email</label>
            <input type="text" id="email" name="email" placeholder="Enter Your Email">
            <div class="field-error" id="err-email"></div>
          </li>
          <li>
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Enter Your Subject"></textarea>
            <div class="field-error" id="err-subject"></div>
          </li>
          <li class="button">
            <button type="submit">Submit</button>
          </li>
        </ul>
        <div id="form-success" class="form-success"></div>
        <div id="form-general-error" class="form-error"></div>
      </form>
    </div>
  </div>
  <?php include 'includes/footer.php'; ?>
  <script src="scripts/jquery-3.7.1.js"></script>
  <script src="scripts/hamburgermenu.js"></script>
  <script>
    (function () {
      const form = document.getElementById('contactForm');
      const successEl = document.getElementById('form-success');
      const generalErr = document.getElementById('form-general-error');

      function clearErrors() {
        ['firstname','lastname','email','subject'].forEach(function (f) {
          const el = document.getElementById('err-' + f);
          if (el) el.textContent = '';
        });
        successEl.textContent = '';
        generalErr.textContent = '';
      }

      form.addEventListener('submit', function (e) {
        e.preventDefault();
        clearErrors();

        const data = new FormData(form);

        fetch(form.action, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: data
        }).then(function (res) {
          return res.json();
        }).then(function (json) {
          if (!json) {
            generalErr.textContent = 'No response from server.';
            return;
          }
          if (json.success) {
            successEl.textContent = json.message || 'Message sent successfully!';
            form.reset();
          } else {
            // Per-field errors
            if (json.errors) {
              Object.keys(json.errors).forEach(function (k) {
                const el = document.getElementById('err-' + k);
                if (el) el.textContent = json.errors[k];
              });
            }
            if (json.message) {
              generalErr.textContent = json.message;
            }
          }
        }).catch(function (err) {
          generalErr.textContent = 'Error sending message. Please try again later.';
          console.error(err);
        });
      });
    })();
  </script>
</body>

</html>