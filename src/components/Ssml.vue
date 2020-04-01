<template>
  <button @click="getTTS(text)">
    Play SSML
  </button>
</template>

<script>
export default {
  name: 'Ssml',
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  methods: {
    createRequest(ssml) {
      return {
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          input: { ssml },
          voice: {
            languageCode: 'sv-SE',
            name: 'sv-SE-Wavenet-A',
            ssmlGender: 'FEMALE'
          },
          audioConfig: {
            audioEncoding: 'MP3',
            speakingRate: 0.8
          }
        }),
        method: 'POST'
      }
    },
    ssmlToText(ssml) {
      return ssml
        .replace('<speak>', '')
        .replace(/<\/p><p>/g, '-')
        .replace(/<p>/g, '')
        .replace('</speak>', '')
        .replace(/<\/p>/g, '')
    },
    textToSsml(text) {
      let ssml = text.replace(/-/g, '</p><p>')
      ssml = `<speak><p>${ssml}</p></speak>`
      return ssml
    },
    async getTTS(text) {
      const ssml = this.textToSsml(text)
      const key = '[Google TTS API Key]' // Generate this on google cloud console, API manager => create API KEY
      const address = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${key}`
      const payload = this.createRequest(ssml)

      try {
        const response = await fetch(`${address}`, payload)
        const result = await response.json()
        const audio = new Audio(`data:audio/wav;base64,${result.audioContent}`)
        await audio.play()
      } catch (err) {
        console.warn(err)
      }
    }
  }
}
</script>

<style scoped></style>
