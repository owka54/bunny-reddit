const url = 'https://www.reddit.com/r/rabbits.json';

export const fetchRabbitData = async () =>
    await fetch(url)
    .then(response => (response.ok ? response : Promise.reject(response)))
    .then(response => response.json())