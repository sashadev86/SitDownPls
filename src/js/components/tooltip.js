import tippy from 'tippy.js';

tippy('.tippy-tooltip', {
  content(reference) {
    const id = reference.getAttribute('data-template');
    const template = document.getElementById(id);
    return template.innerHTML;
  },
  arrow: true,
  trigger: 'click',
  allowHTML: true,
  delay: [100, 800],
  interactive: true,
  animation: 'rotate',
  theme: 'night',
  duration: 800,
});
