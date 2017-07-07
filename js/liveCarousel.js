window.onload = function () {

	var prev = document.getElementById('prev');
	var next = document.getElementById('next');
	var list = document.getElementById('list');

	function animate(offset){
		var offsetNum = parseInt(list.style.left) + offset;

		list.style.left = offsetNum + 'px';

		if (offsetNum < -1128){
			list.style.left = -188 + 'px';
		}

		if (offsetNum > -188){
			list.style.left = -1128 + 'px';
		}
	}

	prev.onclick = function () {
		animate(188);
	}

	next.onclick = function () {
		animate(-188);
	}
}





