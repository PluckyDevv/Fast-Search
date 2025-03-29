import { bangs } from './bangs';
import './style.css';

const BANG_REGEX = /(?:^|\s)!([a-z0-9]+)(?:\s|$)/i;
const DEFAULT_BANG = localStorage.getItem('defaultBang');
const DEFAULT_FALLBACK = 'g';
const NOTHING_URL = 'https://github.com/PluckyDevv/Fast-Search';

const url = new URL(window.location.href);
const newDefaultBang = url.searchParams.get('s');

if (newDefaultBang && bangs.some((bang) => bang.t === newDefaultBang)) {
  localStorage.setItem('defaultBang', newDefaultBang);
  url.searchParams.delete('s');
  window.history.replaceState({}, '', url.toString());
}

const removeDefaultBang = url.searchParams.get('r');

if (removeDefaultBang) {
  localStorage.removeItem('defaultBang');
  url.searchParams.delete('r');
  window.history.replaceState({}, '', url.toString());
}

function getBangUrl() {
  const query = url.searchParams.get('q')?.trim();
  if (!query) return null;

  const match = query.match(BANG_REGEX);
  const bangId = match?.[1]?.toLowerCase();

  let selectedBang = bangId ? bangs.find((bang) => bang.t === bangId) : null;
  if (!selectedBang) selectedBang = bangs.find((bang) => bang.t === DEFAULT_BANG);
  if (!selectedBang) selectedBang = bangs.find((bang) => bang.t === DEFAULT_FALLBACK);
  if (!selectedBang) return null;

  const cleanQuery = query.replace(BANG_REGEX, ' ').trim();
  return selectedBang.u.replace('{{{s}}}', encodeURIComponent(cleanQuery).replace(/%2F/g, '/'));
}

window.location.replace(getBangUrl() || NOTHING_URL);
