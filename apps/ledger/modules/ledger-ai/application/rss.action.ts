'use server';

export async function getIsmmmoRssFeedsAction() {
  try {
    const fetchFeed = async (url: string, label: string) => {
      const res = await fetch(url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
        },
        cache: 'no-store'
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const text = await res.text();
      
      const items = [];
      const itemRegex = /<item>([\s\S]*?)<\/item>/g;
      let match;
      while ((match = itemRegex.exec(text)) !== null && items.length < 3) {
        const itemHtml = match[1];
        const titleMatch = itemHtml.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/) || itemHtml.match(/<title>([\s\S]*?)<\/title>/);
        const linkMatch = itemHtml.match(/<link>([\s\S]*?)<\/link>/);
        const dateMatch = itemHtml.match(/<pubDate>([\s\S]*?)<\/pubDate>/);
        const descMatch = itemHtml.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/) || itemHtml.match(/<description>([\s\S]*?)<\/description>/);
        
        items.push({
          title: titleMatch ? titleMatch[1].trim() : 'Başlıksız',
          link: linkMatch ? linkMatch[1].trim() : '#',
          pubDate: dateMatch ? dateMatch[1].trim() : new Date().toISOString(),
          contentSnippet: descMatch ? descMatch[1].replace(/<[^>]*>?/gm, '').trim() : '',
          label
        });
      }
      return items;
    };

    const mevzuatItems = await fetchFeed('http://rss.istanbulsmmmodasi.org.tr/mevzuat.xml', 'Mevzuat Birimi').catch((e) => [{
      title: 'Hata: ' + e.message, link: '#', pubDate: new Date().toISOString(), contentSnippet: e.stack, label: 'Error'
    }]);
    const anasayfaItems = await fetchFeed('http://rss.istanbulsmmmodasi.org.tr/anasayfa.xml', 'Ana Sayfa').catch((e) => [{
      title: 'Hata: ' + e.message, link: '#', pubDate: new Date().toISOString(), contentSnippet: e.stack, label: 'Error'
    }]);

    const allItems = [...mevzuatItems, ...anasayfaItems];

    allItems.sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

    return { success: true, data: allItems.slice(0, 5) };
  } catch (error: any) {
    console.error('getRssFeeds error:', error);
    return { success: false, error: error.message };
  }
}
