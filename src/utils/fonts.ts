export function getFontFamily(fontWeight?: string | number): string {
  if (!fontWeight) {
    return "PlusJakartaSans-Regular";
  }

  const weight = typeof fontWeight === "string" ? fontWeight : fontWeight.toString();

  if (weight === "900" || weight === "black") {
    return "PlusJakartaSans-ExtraBold";
  }
  if (weight === "700" || weight === "bold") {
    return "PlusJakartaSans-Bold";
  }
  if (weight === "600" || weight === "semiBold") {
    return "PlusJakartaSans-SemiBold";
  }
  if (weight === "500" || weight === "medium") {
    return "PlusJakartaSans-Medium";
  }
  if (weight === "300" || weight === "light") {
    return "PlusJakartaSans-Light";
  }

  return "PlusJakartaSans-Regular";
}

export function getMonoFont(fontWeight?: string | number): string {
  if (!fontWeight) {
    return "JetBrainsMono-Regular";
  }

  const weight = typeof fontWeight === "string" ? fontWeight : fontWeight.toString();

  if (weight === "900" || weight === "black") {
    return "JetBrainsMono-ExtraBold";
  }
  if (weight === "700" || weight === "bold") {
    return "JetBrainsMono-Bold";
  }
  if (weight === "600" || weight === "semiBold") {
    return "JetBrainsMono-SemiBold";
  }
  if (weight === "500" || weight === "medium") {
    return "JetBrainsMono-Medium";
  }
  if (weight === "300" || weight === "light") {
    return "JetBrainsMono-Light";
  }

  return "JetBrainsMono-Regular";
}