const shakespeareQuotes = {
    list1 : ['To be, or not to be: that is the question',
    'All the world’s a stage, and all the men and women merely players. They have their exits and their entrances; And one man in his time plays many parts.',
    'Romeo, Romeo! Wherefore art thou Romeo?',
    'Now is the winter of our discontent',
    'Is this a dagger which I see before me, the handle toward my hand?',
    'The lady doth protest too much, methinks'],
    list2 : ['Beware the Ides of March.',
    'Get thee to a nunnery.',
    'If music be the food of love play on.',
    'What’s in a name? A rose by any other name would smell as sweet.',
    'The better part of valor is discretion',
    'All that glisters is not gold.'],
    list3 : ['Friends, Romans, countrymen, lend me your ears: I come to bury Caesar, not to praise him.',
    'Cry “havoc!” and let slip the dogs of war',
    'A horse! a horse! my kingdom for a horse!',
    'There are more things in heaven and earth, Horatio, than are dreamt of in your philosophy.',
    'Love looks not with the eyes, but with the mind; and therefore is winged Cupid painted blind.',
    'Shall I compare thee to a summer’s day? Thou art more lovely and more temperate.'],
    selectMessage : function() {
        console.log(this.list1[(Math.floor(Math.random() * this.list1.length))] + ' / ' +
                    this.list2[(Math.floor(Math.random() * this.list2.length))] + ' / ' +
                    this.list3[(Math.floor(Math.random() * this.list3.length))])
    }
}

shakespeareQuotes.selectMessage()
