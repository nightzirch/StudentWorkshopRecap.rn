const config = {
  ApiBaseUrl: 'http://167.99.43.145:3000',
  // GetParticipantsUrl: () => `${config.ApiBaseUrl}/participants`
  GetParticipantsUrl: () => `${config.ApiBaseUrl}/parsed-participants`
}

export default config;