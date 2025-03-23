export function maskNumberWithX(value: string | number) {
  if (!value) return "0"; // Handle empty values

  const formatted = Number(value).toLocaleString(); // Format with commas
  return formatted.charAt(0) + formatted.slice(1).replace(/\d/g, "X"); // Replace all digits (except first) with "X"
}

// export function scrollToSection(section: string) {
//   document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
// }
