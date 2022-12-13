<template>
  <nav
    class="mt-5 container flex flex-wrap items-center justify-between mx-auto"
    aria-label="Breadcrumb"
  >
    <ol class="inline-flex mx-5 items-center space-x-1 md:space-x-3">
      <router-link :to="{ name: 'index' }">
        <p class="font-light hover:underline">Home</p>
      </router-link>
      <li>
        <div aria-current="page" class="flex items-center">
          <svg
            class="w-6 h-6 text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <router-link :to="{ name: 'notation' }" class="ml-3">
            <p class="font-bold hover:underline">特定商取引法に基づく表記</p>
          </router-link>
        </div>
      </li>
    </ol>
  </nav>

  <section class="bg-white dark:bg-gray-900">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
        <h2
          class="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white"
        >
          特定商取引法に基づく表記
        </h2>
        <div
          class="grid pt-8 text-left border-t border-gray-200 md:gap-16 dark:border-gray-700 md:grid-cols-2"
        />
      </div>
      <div class="overflow-x-auto relative">
        <table
          class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
        >
          <thead
            class="border-b border-gray-200 text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr>
              <th scope="col" class="py-3 px-6 rounded-l-lg">販売社名</th>
              <th scope="col" class="py-3 px-6">
                有限会社アマヤマトレーディング
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                運営統括責任者
              </th>
              <td class="py-4 px-6">池上智太</td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                所在地
              </th>
              <td class="py-4 px-6">大阪府箕面市小野原東4-22-3</td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                電話番号
              </th>
              <td class="py-4 px-6">050-3786-7884</td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                メールアドレス
              </th>
              <td class="py-4 px-6">sales@amayama.co.jp</td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                販売URL
              </th>
              <td class="py-4 px-6">https://www.amayama.com/en</td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                お支払い方法
              </th>
              <td class="py-4 px-6">
                クレジットカード<br />
                Paypal<br />
                銀行振り込み：三井住友・三菱東京ＵＦＪ・池田泉州<br />
              </td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                商品代金以外の必要金額
              </th>
              <td class="py-4 px-6">
                消費税（日本国内販売の場合）、販売手数料（販売価格に含む）、配送料（ご注文時にお知らせします）、通関にかかる関税・通関手数料など（お受け取り時に
                配送業者からのご請求）
              </td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                注文有効期限
              </th>
              <td class="py-4 px-6">
                注文確定後7日以内にご入金お願いいたします。<br />
                30日間入金がない場合は、キャンセルとさせていただきます。
              </td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                商品引渡し時期
              </th>
              <td class="py-4 px-6">
                指定日が無ければ入金確認後5営業日以内で発送致します。<br />
                ただし、商品の在庫状況によってはお届け日が遅れる場合があります。発送が遅れる場合は、速やかにご連絡をいたします。
              </td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                商品引渡し方法
              </th>
              <td class="py-4 px-6">当方にて手配後、運送会社による配送</td>
            </tr>
            <tr
              class="bg-white border-t border-b border-gray-200 dark:bg-gray-800"
            >
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                返品・不良品について
              </th>
              <td class="py-4 px-6">
                「不良品・当社の商品の間違え」の場合は当社が負担いたします。<br />
                配送途中の破損などの事故がございましたら、弊社までご連絡下さい。<br />
                送料・手数料ともに弊社負担で早急に新品をご送付致します。<br />
                <div class="pt-5" />
                <span>【返品対象】</span><br />
                「不良品・当社の商品の間違え」の場合<br />
                <div class="pt-5" />
                <span>【返品時期】</span><br />
                ご購入後14日以内にご連絡があった場合に返金可能となります。<br />
                <div class="pt-5" />
                <span>【返品方法】</span><br />
                メールにて返金要請してください。<br />
                14日以内にご購入代金を指定の口座へお振込いたします。
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>
