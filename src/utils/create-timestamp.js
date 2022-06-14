export default function createTimeStamp(date) {
  const locales = 'en-GB' || navigator.language;
  const options = {
		year: "numeric",
		day: "numeric",
    month: "short"
	};

  return date.toLocaleDateString(locales, options)
}