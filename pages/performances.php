<?php
$page_title = "Home"
  ?>
<!DOCTYPE html>
<html lang="en">

<?php include('includes/meta.php'); ?>

<body>
  <?php include('includes/header.php'); ?>
  <div class="video-wrap medium max-h-240">
    <iframe
        src="https://www.youtube.com/embed/A_I_s8tKRKw"
        title="Short descriptive title for screen readers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    </div>
  <div class="video-wrap medium max-h-240">
    <iframe
        src="https://www.youtube.com/embed/eZQ2MaSll8g"
        title="Short descriptive title for screen readers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    </div>
    <div class="video-wrap medium max-h-240">
    <iframe
        src="https://www.youtube.com/embed/GICaK_9Xhsc"
        title="Short descriptive title for screen readers"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
        loading="lazy"></iframe>
    </div>
  <?php include 'includes/footer.php'; ?>
  <script src="scripts/jquery-3.7.1.js"></script>
  <script src="scripts/hamburgermenu.js"></script>

</body>

</html>