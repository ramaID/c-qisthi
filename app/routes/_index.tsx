import type { V2_MetaFunction } from "@remix-run/cloudflare";
import { textVide } from "text-vide";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  const author = {
    name: "Qisthi Ramadhani",
    href: "https://laravel.pusatwisata24.com",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  };
  const posts = [
    {
      title: "15m Quickstart Blog Tutorial",
      href: "https://remix.run/tutorials/blog",
      category: { name: "Article", href: "#" },
      description:
        "Tetapi saya harus menjelaskan kepada Anda bagaimana semua gagasan keliru tentang mencela kesenangan dan memuji rasa sakit ini lahir dan saya akan memberi Anda penjelasan lengkap tentang sistem ini, dan menjelaskan ajaran sebenarnya dari penjelajah besar kebenaran, pembangun utama kebahagiaan manusia. Tidak ada yang menolak, tidak menyukai, atau menghindari kesenangan itu sendiri, karena kesenangan itu sendiri, tetapi karena mereka yang tidak tahu bagaimana mengejar kesenangan secara rasional menghadapi konsekuensi yang sangat menyakitkan.",
      date: "Mar 16, 2023",
      datetime: "2023-03-16",
      imageUrl:
        "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "6 min",
      author: author,
    },
    {
      title: "Deep Dive Jokes App Tutorial",
      href: "https://remix.run/tutorials/jokes",
      category: { name: "Video", href: "#" },
      description:
        "Juga tidak ada orang yang mencintai atau mengejar atau berkeinginan untuk mendapatkan rasa sakit itu sendiri, karena itu adalah rasa sakit, tetapi kadang-kadang terjadi keadaan di mana kerja keras dan rasa sakit dapat memberinya kesenangan besar.Untuk mengambil contoh sepele, siapa di antara kita yang pernah melakukan latihan fisik yang melelahkan, kecuali untuk mendapatkan beberapa keuntungan dari itu? Tapi siapa yang berhak mencari kesalahan pada pria yang memilih untuk menikmati kesenangan tanpa konsekuensi yang mengganggu, atau orang yang menghindari rasa sakit yang tidak menghasilkan kesenangan?",
      date: "Mar 10, 2020",
      datetime: "2023-03-13",
      imageUrl:
        "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "4 min",
      author: author,
    },
    {
      title: "Remix Docs",
      href: "https://remix.run/docs/en/main",
      category: { name: "Case Study", href: "#" },
      description:
        "Di sisi lain, kami mencela dengan kemarahan yang benar dan tidak menyukai orang-orang yang begitu tertipu dan terdemoralisasi oleh pesona kesenangan saat ini, begitu dibutakan oleh keinginan, sehingga mereka tidak dapat melihat rasa sakit dan kesulitan yang pasti akan terjadi; dan kesalahan yang sama dimiliki oleh mereka yang gagal dalam tugas mereka karena lemahnya kemauan, yang sama dengan mengatakan karena menyusut dari kerja keras dan rasa sakit. Kasus-kasus ini sangat sederhana dan mudah dibedakan.",
      date: "Feb 12, 2023",
      datetime: "2023-02-12",
      imageUrl:
        "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
      readingTime: "11 min",
      author: author,
    },
  ];

  return (
    <div className="relative bg-gray-50 px-6 pt-16 pb-20 lg:px-8 lg:pt-24 lg:pb-28">
      <div className="absolute inset-0">
        <div className="h-1/3 bg-white sm:h-2/3" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            From the blog
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa
            libero labore natus atque, ducimus sed.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-lg gap-5 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <div
              key={post.title}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.imageUrl}
                  alt={"Banner: " + post.title}
                />
              </div>
              <div className="flex flex-1 flex-col justify-between bg-white p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-indigo-600">
                    <a href={post.category.href} className="hover:underline">
                      {post.category.name}
                    </a>
                  </p>
                  <a href={post.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-900">
                      {post.title}
                    </p>
                    <p
                      className="mt-3 text-base text-gray-500"
                      dangerouslySetInnerHTML={{
                        __html: textVide(post.description),
                      }}
                    ></p>
                  </a>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <a href={post.author.href}>
                      <span className="sr-only">{post.author.name}</span>
                      <img
                        className="h-10 w-10 rounded-full"
                        src={post.author.imageUrl}
                        alt={"Author: " + post.author.name}
                      />
                    </a>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900">
                      <a href={post.author.href} className="hover:underline">
                        {post.author.name}
                      </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time dateTime={post.datetime}>{post.date}</time>
                      <span aria-hidden="true">&middot;</span>
                      <span>{post.readingTime} read</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
