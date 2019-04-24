

export const hello = async () => {
  try {
    const data = await fetch('https://rough-firefly-3994.getsandbox.com/hello')
    return data.json()
  } catch (error) {
    console.error(error.message)
  }
}