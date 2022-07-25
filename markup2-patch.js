getYoutube = function(id, callback) {
	var x = new XMLHttpRequest
	x.open("GET", "https://www.youtube.com/oembed?url=https://youtube.com/watch?v="+id+"&format=json")
	x.onload = function() {
		if (x.status != 200)
			return
		try {
			var json = JSON.parse(x.responseText)
			callback(json)
		} catch(e){}
	}
	x.send()
}

function stopwritingcursedjschallenge12edition([html/*‹String›*/])/*‹Node›*/ {
		let temp = document.createElement('template')
		temp.innerHTML = html
		let elem = temp.content.firstChild
		return elem.cloneNode.bind(elem, true)
	}

Markup.create.youtube = function({id, url}) {
	let e = this[0]()
	
	let close = e.lastChild
	let preview = e.firstChild
	
	let link = preview
	link.href = url
	link.style.backgroundImage = 'url("https://i.ytimg.com/vi/'+id+"/mqdefault.jpg"+'")'
	
	let title = link.firstChild
	let channel = link.lastChild
	
	let create = this[1]
	let iframe
	
	getYoutube(id, function(data) {
		title.textContent = data.title
		channel.textContent = data.author_name
	})
	
	close.onclick = (event)=>{
		if (!iframe) return
		//close.hidden = true
		iframe.src = 'about:blank'
		iframe.replaceWith(preview)
		iframe = null
		e.className = "youtube"
	}
	
	preview.onclick = (event)=>{
		event.preventDefault()
		if (iframe)
			return
		//close.hidden = false
		iframe = create()
		iframe.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1`
		e.className = "youtube playingYoutube"
		preview.replaceWith(iframe)
	}
	
	return e
}.bind([
	stopwritingcursedjschallenge12edition`<div class="youtube"><a target=_blank><div class="pre videoTitle"></div><br><div class="pre videoAuthor"></div></a><button>❌</button>`,
	stopwritingcursedjschallenge12edition`<iframe referrerpolicy=no-referrer allowfullscreen>`,
])
