export const useDownloadLink = () => {
  const download = (url: string, filename: string) => {
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = filename;
    anchor.click();
    anchor.remove();
  };

  return download;
};
