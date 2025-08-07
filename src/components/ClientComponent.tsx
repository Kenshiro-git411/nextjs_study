/* client側で処理を行うコード */
'use client'
import { useState } from "react";

export default function ClientComponent() {
    const [ count, setCount ] = useState(0);
    console.log('Client側で処理を実行しました');
    return (
    <div>
      クライアント
      {/* クリックでカウントアップ */}
      <button onClick={()=> setCount(count + 1)}> Count:{count} </button> 
    </div>
  )
}
