import Link from 'next/link';

export default () => (
  <div>
    <h1>Lançastes a braba</h1>
    <Link prefetch href="/about">
      <button>About</button>
    </Link>
  </div>
);
