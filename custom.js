function changeGiscusTheme (newTheme) {
    const theme = newTheme;

    function sendMessage(message) {
      const iframe = document.querySelector('iframe.giscus-frame');
      if (!iframe) return;
      iframe.contentWindow.postMessage({ giscus: message }, 'https://giscus.app');
    }

    sendMessage({
      setConfig: {
        theme: theme
      }
    });
  }

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    themeSwitcher.scheme = e.matches ? 'dark' : 'light';
    changeGiscusTheme(e.matches ? 'dark' : 'light');
});

