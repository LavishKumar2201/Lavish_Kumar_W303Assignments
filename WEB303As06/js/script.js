// Accordion
$('.accord-label').on('click', function (e) {
  e.preventDefault(); // Prevent the default action of the click event.
  let $this = $(this);
  let $panels = $('.accord-panel');

  $panels.not($this.next()).removeClass('showing'); // Remove 'showing' class from other panels
  $this.next().toggleClass('showing').slideToggle();
  $panels.not($this.next()).slideUp(); // Hide other panels
});

// Tab Panels
$('.tab-panel').hide();
$('#tab1').show();
$('.tab-list li').on('click', function (e) {
  e.preventDefault();
  let $this = $(this);
  let $tabs = $('.tab-panel');

  $('.tab-list li').removeClass('active');
  $tabs.hide();

  $this.addClass('active');
  let panel = $this.find('a').attr('href');
  $(panel).show();
  return false;
});
