//include { lorem_ipsum } from "./lorem_ipsum.js"
/** Generated with lipsum.com */
const lorem_ipsum = {
	text: {
		title: "Lorem Ipsum",
		header:
			'"Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..."',
		center:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas hendrerit neque ut magna commodo convallis. Vivamus et sodales dolor. In rutrum interdum commodo. Praesent sollicitudin egestas nibh, a laoreet ante bibendum quis. Sed ultrices leo ac quam auctor consequat. Donec ultricies mi vitae rhoncus tincidunt. Fusce eleifend consectetur massa, pellentesque molestie risus facilisis nec. Quisque arcu dui, lacinia malesuada consequat et, vulputate vel ligula. Fusce nec quam a quam dignissim sollicitudin. Cras sodales enim nunc, eget aliquet est pretium in. Donec non odio quis sapien efficitur efficitur ac a erat. Sed ut vehicula augue. Sed fringilla ac mauris eu semper. Aliquam ante nulla, dignissim a finibus vitae, rhoncus eu libero.",
		header2:
			"Integer quis lorem dui. Suspendisse molestie neque urna, ac dictum purus scelerisque in. Aliquam consectetur ullamcorper turpis, ut fermentum massa finibus non. Suspendisse potenti. In bibendum purus vitae orci interdum rutrum. Sed tortor nunc, tincidunt vel purus nec, vulputate commodo nisi. Morbi efficitur, urna sed hendrerit tincidunt, tortor risus bibendum dolor, a gravida eros nibh auctor diam. Cras nec sem ut nisi fermentum porta. Donec fringilla accumsan est vitae placerat. Nulla gravida porttitor lorem vitae semper. Maecenas ultrices et eros a aliquet. Mauris laoreet fermentum fermentum. Curabitur lorem ex, varius sit amet ipsum a, efficitur aliquam ipsum. Mauris sit amet suscipit odio. Proin accumsan facilisis mauris, et suscipit enim.",
		sidebar_left:
			"In lacus tortor, ullamcorper fringilla lobortis eu, faucibus a neque. Donec gravida porttitor tortor, in lobortis lacus tincidunt ac. Morbi tortor eros, finibus in pharetra ut, convallis id velit. Aenean dictum, neque vitae condimentum consequat, augue nulla interdum enim, eu porta velit metus vitae turpis. Duis sed finibus purus, et aliquet massa. In a porttitor ipsum. Sed hendrerit sagittis eros eget mattis. Sed sit amet elit non turpis dapibus molestie. Etiam sed auctor augue.",
		sidebar_right:
			"Integer vehicula tempor est, in viverra mi egestas non. Quisque a eros vel urna blandit facilisis. Curabitur a varius enim. In mattis, nunc tincidunt porta molestie, eros massa posuere nisi, sed venenatis quam dolor a ante. Curabitur eu enim ac dolor molestie condimentum sit amet a nibh. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sed augue massa.",
		footer:
			"Quisque id dui eros. Nullam ultrices, dolor ac ultricies varius, nunc nisi faucibus justo, eu volutpat arcu metus eget mauris. Nam ultrices eros sit amet tortor finibus, id congue felis sagittis. Praesent vulputate odio et orci hendrerit auctor. Nam sit amet venenatis felis. Nam pharetra eget metus nec dictum. Aliquam at tellus metus. Maecenas cursus commodo mauris, quis rutrum sem fringilla sit amet. Morbi vulputate neque a felis aliquet laoreet. Nullam vitae volutpat urna. In consequat odio sit amet erat ullamcorper, vitae lobortis ligula convallis. Nullam congue nisi lectus, eget dapibus enim dignissim sit amet.",
	},
};

body = document.body;
elements = {
	header: document.createElement("header"),
	sidebar_left: document.createElement("nav"),
	center: document.createElement("main"),
	sidebar_right: document.createElement("article"),
	footer: document.createElement("footer"),
};

Object.entries(elements).forEach((e) => {
	e[1].innerText = e[0];
	e[1].className = e[0];
	body.append(e[1]);
});

//elements.center_container.append(
//	elements.sidebar_left,
//	elements.center,
//	elements.sidebar_right
//);

//body.append(header);
//body.append(sidebar_left);
//body.append(center);
//body.append(sidebar_right);
//body.append(footer);
