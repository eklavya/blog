window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    themeSwitcher.scheme = e.matches ? 'dark' : 'light';
});
