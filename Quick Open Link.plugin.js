//META{"name":"quickOpenLink"}*//
'use strict';
function quickOpenLink()
	{
	function checkClick(e)
		{
		function modalObserver(m)
			{
			const
				mut=m[0];
			if(mut.addedNodes.length)
				{
				modalStyle.display='none';
				modalCont.firstChild.click();
				}
			else
				{
				if(mut.removedNodes.length)
					{
					this.disconnect();
					setTimeout
						(
						function()
							{
							modalStyle.display='';
							},
						500
						);
					}
				}
			}
		var
			node;
		if(e.ctrlKey)
			{
			node=e.target;
			if(node.nodeName=='IMG')
				{
				node=node.parentNode;
				if(node.nodeName=='A')
					{
					open(node.href);
					new MutationObserver(modalObserver).observe(modalCont,{childList:1});
					}
				}
			}
		}
	const
		_=this,
		root=document.getElementById('app-mount'),
		section=root.getElementsByTagName('section')[0],
		modalCont=root.getElementsByClassName('modal-container')[0],
		modalStyle=modalCont.style;
	_.getName=()=>'Quick Link Open';
	_.getDescription=()=>'Ctrl+Click to open attachments in your browser';
	_.getVersion=()=>'0.2';
	_.getAuthor=()=>'XFox Prower';
	_.load=function(){};
	_.start=function()
		{
		section.addEventListener('click',checkClick);
		};
	_.stop=function()
		{
		section.removeEventListener('click',checkClick);
		};
	}
