//META{"name":"quickOpenLink"}*//
'use strict';
function quickOpenLink()
	{
	function openLink(e)
		{
		const
			link=e.target.parentNode;
		if(e.ctrlKey&&link.parentNode.className=='attachment-image')
			{
			open(link.href);
			}
		}
	const
		_=this,
		D=document;
	_.getName=()=>'Quick Link Open';
	_.getDescription=()=>'Ctrl+Click to open attachments in your browser';
	_.getVersion=()=>'0.1';
	_.getAuthor=()=>'XFox Prower';
	_.load=function(){};
	_.start=function()
		{
		D.addEventListener('click',openLink);
		};
	_.stop=function()
		{
		D.removeEventListener('click',openLink);
		};
	}