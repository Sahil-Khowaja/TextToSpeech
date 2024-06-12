let speech = new SpeechSynthesisUtterance();

let voices = [];
let voiceSelect = document.querySelector('select');
window.speechSynthesis.onvoiceschanged = () => {
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => {
        voiceSelect.add(new Option(voice.name, i));
    });
}

document.querySelector('button').addEventListener('click', () => {
    speech.text = document.querySelector('textarea').value;
    speech.voice = voices[voiceSelect.value];
    window.speechSynthesis.speak(speech);
});
