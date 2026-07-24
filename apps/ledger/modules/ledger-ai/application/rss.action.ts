'use server';

import Parser from 'rss-parser';

export async function getIsmmmoRssFeedsAction() {
  try {
    const parser = new Parser({
      timeout: 5000,
    });
    
    // As per user screenshot, fetch Mevzuat and Kurumsal or Ana Sayfa
    const feeds = [
      { url: 'http://rss.istanbulsmmmodasi.org.tr/mevzuat.xml', label: 'Mevzuat Birimi' },
      { url: 'http://rss.istanbulsmmmodasi.org.tr/anasayfa.xml', label: 'Ana Sayfa' },
    ];

    const results = await Promise.allSettled(
      feeds.map(feed => parser.parseURL(feed.url).then(parsed => ({ ...parsed, label: feed.label })))
    );

    let allItems: any[] = [];

    results.forEach(result => {
      if (result.status === 'fulfilled' && result.value.items) {
        const feedLabel = result.value.label;
        const items = result.value.items.slice(0, 3).map(item => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          contentSnippet: item.contentSnippet,
          label: feedLabel
        }));
        allItems = [...allItems, ...items];
      }
    });

    // Sort by pubDate descending
    allItems.sort((a, b) => {
      return new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime();
    });

    return { success: true, data: allItems.slice(0, 5) };
  } catch (error: any) {
    console.error('getRssFeeds error:', error);
    return { success: false, error: error.message };
  }
}
