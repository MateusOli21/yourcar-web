function scrollToSection(sectionId) {
  const anchor = document.querySelector(sectionId);

  if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export default scrollToSection;
