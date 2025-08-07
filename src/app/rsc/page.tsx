/* サーバーサイドのコンポーネント */

import ClientComponent from "@/components/ClientComponent";
import Link from "next/link";

export default function ServerComponent() {

  console.log('Server側で処理を実行しました');
  return (
    <div>
      サーバー
      <ClientComponent/>

      {/* このページが表示される前にプリフェッチしてデータを先に入手している ※サーバー側の処理で行う */}
      <Link href="/about">About</Link>
    </div>
  )
}
