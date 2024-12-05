let prevLang = 'en';

async function translateText(text, srcLang, destLang) {
    const apiUrl = 'https://api.devnagri.com/machine-translation/v2/translate';
    const apiKey = 'devnagri_27c27424b26b11efb34742010aa00012';

    const payload = {
        key: apiKey,
        sentence: text,
        src_lang: srcLang,
        dest_lang: destLang,
    };

    try {
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload),
        });

        if (response.ok) {
            const data = await response.json();
            return data.translated_text;
        } else {
            console.error(`API Error: ${response.status} - ${response.statusText}`);
            return text;
        }
    } catch (error) {
        console.error('API Call Failed:', error);
        return text;
    }
}

function getAllTextNodes() {
    const walker = document.createTreeWalker(
        document.body,
        NodeFilter.SHOW_TEXT,
        {
            acceptNode: (node) => {
                if (node.nodeValue.trim()) return NodeFilter.FILTER_ACCEPT;
                return NodeFilter.FILTER_REJECT;
            },
        }
    );

    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
        nodes.push(node);
    }
    return nodes;
}

async function translateSiteText(srcLang, destLang) {
    const textNodes = getAllTextNodes();

    for (const node of textNodes) {
        const originalText = node.nodeValue.trim();
        if (originalText.length > 0) {
            const translatedText = await translateText(originalText, srcLang, destLang);
            if (translatedText !== originalText) {
                node.nodeValue = translatedText;

                if (node.parentElement) {
                    node.parentElement.style.display = 'none';
                    node.parentElement.offsetHeight;
                    node.parentElement.style.display = '';
                }
            }
        }
    }
}

async function translateAttributes(srcLang, destLang) {
    const elementsWithPlaceholder = document.querySelectorAll('[placeholder]');
    for (const el of elementsWithPlaceholder) {
        const originalPlaceholder = el.getAttribute('placeholder');
        const translatedPlaceholder = await translateText(originalPlaceholder, srcLang, destLang);
        el.setAttribute('placeholder', translatedPlaceholder);
    }
}

document.getElementById('languageSelect').addEventListener('change', async (event) => {
    const destLang = event.target.value;
    const srcLang = prevLang;

    await translateSiteText(srcLang, destLang);
    await translateAttributes(srcLang, destLang);

    prevLang = destLang;

    console.log('Translation completed.');
});