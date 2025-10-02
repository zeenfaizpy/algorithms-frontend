const API_BASE = 'http://127.0.0.1:8000'


export async function fetchData(n) {
    const res = await fetch(`${API_BASE}/api/second_algo?n=${n}`)
    if (!res.ok) throw new Error('Network error')
    return res.json()
}