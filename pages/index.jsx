import Head from 'next/head';
import 'tdesign-react/dist/reset.css';
import Link from 'next/link';

export default function () {
  return (
    <div>
      <Head>
        <title>APP大爆炸</title>
        <link rel="icon" href="https://openaiapi-site.azureedge.net/public-assets/d/ead04ef722/favicon.png" />
      </Head>
      <main style={{ textAlign: 'center', padding: '20px' }}>
        <h4>欢迎来到人工智能新世界</h4>
        <div style={{ lineHeight: '1.9', marginTop: '50px' }}>
          <div>
            <Link href="/qiming">
              人工智能起名
            </Link>

          </div>
          <div>
            <Link href="/lengxiaohua">
              讲冷笑话
            </Link>
          </div>

          <div>
            <Link href="/fanyi">
              翻译
            </Link>
          </div>
          <div>
            <Link href="/rizhi">
              编写日志
            </Link>
          </div>

          <div>
            <Link href="/chat">
              问问题
            </Link>
          </div>
          <div>
            <Link href="/caidengmi">
              猜灯谜
            </Link>
          </div>
          <div>
            <Link href="/cuobiezi">
              汉字纠错
            </Link>
          </div>
          <div>
            <Link href="/luxian">
              路线规划
            </Link>
          </div>
          <div>
            <Link href="/xiege">
              写歌
            </Link>
          </div>

          <div>
            <Link href="/xieshi">
              写诗
            </Link>
          </div>
        </div>

      </main>
    </div>
  );
}
