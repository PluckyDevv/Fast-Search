import { bangs } from './bangs';
import './style.css';

const BANG_PREFIX_REGEX = /!(\S+)/i;
const BANG_SUFFIX_REGEX = /(\S+)!/;
const DEFAULT_BANG = localStorage.getItem('defaultBang');
const DEFAULT_FALLBACK = 'g';
const NOTHING_URL = 'https://github.com/PluckyDevv/Fast-Search';

const url = new URL(window.location.href);

const newDefaultBang = url.searchParams.get('s');
const removeDefaultBang = url.searchParams.get('r');

if (newDefaultBang && bangs.some((bang) => bang.t === newDefaultBang)) {
  localStorage.setItem('defaultBang', newDefaultBang);
  url.searchParams.delete('s');
  window.history.replaceState({}, '', url.toString());
}

if (removeDefaultBang) {
  localStorage.removeItem('defaultBang');
  url.searchParams.delete('r');
  window.history.replaceState({}, '', url.toString());
}

function getBangUrl() {
  const query = url.searchParams.get('q')?.trim();
  if (!query) return null;

  const prefixMatch = query.match(BANG_PREFIX_REGEX);
  const suffixMatch = query.match(BANG_SUFFIX_REGEX);
  const bangId = (prefixMatch?.[1] ?? suffixMatch?.[1])?.toLowerCase();

  let selectedBang = bangId ? bangs.find((bang) => bang.t === bangId) : null;
  if (!selectedBang) selectedBang = bangs.find((bang) => bang.t === DEFAULT_BANG);
  if (!selectedBang) selectedBang = bangs.find((bang) => bang.t === DEFAULT_FALLBACK);
  if (!selectedBang) return null;

  const cleanQuery = query.replace(BANG_PREFIX_REGEX, '').replace(BANG_SUFFIX_REGEX, '').trim();

  if (!cleanQuery) {
    return new URL(selectedBang.u).origin;
  }

  return selectedBang.u.replace('{{{s}}}', encodeURIComponent(cleanQuery).replace(/%2F/g, '/'));
}

window.location.replace(getBangUrl() || NOTHING_URL);
