<?php
$page_title = "Auditions"
  ?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" type="text/css" href="styles/site.css">
  <title>Home Page</title>
</head>

<body>
  <?php include('includes/header.php'); ?>

  <h2 class="wide-text" id="auditions">Spring 2024 Auditions are now open!</h2>
  <figure id="auditions-poster">
    <img src="images/auditions.png" alt="auditions poster" width="600">
  </figure>
  <section id="faqs">
    <div class="wide-text">
      <h2 id="faq">Frequently Asked Questions</h2>
      <h3>When do auditions take place?</h3>
      <p>Auditions take place at the start of every semester. Follow us on Instagram for the latest updates on audition
        locations and schedules.</p>
      <br>
      <h3>How can I prepare for auditions?</h3>
      <p>You'll need to prepare a verse and chorus of a song of your choice.</p>
      <br>
      <h3>How do I choose what song to sing?</h3>
      <p>Pick a song that showcases your voice and style, and is something you enjoy singing.</p>
      <br>
      <h3>What happens after the audition?</h3>
      <p>If your auditions leaves us wanting more, you'll be invited to a callback.</p>
    </div>
  </section>

  <?php include 'includes/footer.php'; ?>
  <script src="scripts/jquery-3.7.1.js"></script>
  <script src="scripts/hamburgermenu.js"></script>
</body>

</html>