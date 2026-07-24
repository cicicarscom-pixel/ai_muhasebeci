'use server';

export async function getIsmmmoRssFeedsAction() {
  try {
    const fetchFeed = async (url: string, label: string) => {
      const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(url)}`;
      const res = await fetch(apiUrl, { cache: 'no-store' });
      
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      
      if (data.status !== 'ok') {
        throw new Error(data.message || 'RSS fetch failed');
      }

      const items = [];
      const dataItems = data.items || [];
      
      for (let i = 0; i < Math.min(3, dataItems.length); i++) {
        const item = dataItems[i];
        items.push({
          title: item.title || 'Başlıksız',
          link: item.link || '#',
          pubDate: item.pubDate || new Date().toISOString(),
          contentSnippet: (item.description || '').replace(/<[^>]*>?/gm, '').trim(),
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
