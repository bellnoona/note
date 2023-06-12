import Link from 'next/link';

const products = ['shirt', 'pants', 'shoes', 'skirt'];

export default function ProductsPage() {
  return (
    <>
      <h1>제품 소개 페이지👗👕</h1>

      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <Link href={`products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
