<script>
	import { onMount } from 'svelte';
	import { mapbox } from './mapbox.js';

	// set the context here...

	export let lat;
	export let lon;
	export let zoom;

	let container;
	let map;
	// let hover_geojson = "https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson"
	let hover_geojson = "https://raw.githubusercontent.com/southkorea/southkorea-maps/master/gadm/json/skorea-municipalities-geo.json"

	onMount(() => {
		const link = document.createElement('link');
		link.rel = 'stylesheet';
		link.href = 'https://api.mapbox.com/mapbox-gl-js/v2.4.1/mapbox-gl.css';

		link.onload = () => {
			map = new mapbox.Map({
				container,
				style: 'mapbox://styles/mapbox/streets-v11',
				center: [lon, lat],
				zoom
			});

			let hoveredStateId = null;

			map.on('load', () => {
				map.addSource('states', {
					'type': 'geojson',
					'data': hover_geojson
				});

				// The feature-state dependent fill-opacity expression will render the hover effect
				// when a feature's hover state is set to true.
				map.addLayer({
					'id': 'state-fills',
					'type': 'fill',
					'source': 'states',
					'layout': {},
					'paint': {
						'fill-color': '#627B7b',
						'fill-opacity': [
							'case',
							['boolean', ['feature-state', 'hover'], false],
							1,
							0.3
						]
					}
				});

				map.addLayer({
					'id': 'state-borders',
					'type': 'line',
					'source': 'states',
					'layout': {},
					'paint': {
						'line-color': '#627BC1',
						'line-width': 0.5
					}
				});

				// When the user moves their mouse over the state-fill layer, we'll update the
				// feature state for the feature under the mouse.
				map.on('mousemove', 'state-fills', (e) => {
					if (e.features.length > 0) {
						if (hoveredStateId !== null) {
							map.setFeatureState(
								{ source: 'states', id: hoveredStateId },
								{ hover: false }
							);
						}
						hoveredStateId = e.features[0].properties.ID_2;
						map.setFeatureState(
							{ source: 'states', id: hoveredStateId },
							{ hover: true }
						);
					}
				});

				// When the mouse leaves the state-fill layer, update the feature state of the
				// previously hovered feature.
				map.on('mouseleave', 'state-fills', () => {
					if (hoveredStateId !== null) {
						map.setFeatureState(
							{ source: 'states', id: hoveredStateId },
							{ hover: false }
						);
					}
					hoveredStateId = null;
				});
			});
		};

		document.head.appendChild(link);

		return () => {
			map.remove();
			link.parentNode.removeChild(link);
		};
	});
</script>

<div bind:this={container}>
	{#if map}
		<slot></slot>
	{/if}
</div>

<style>
	div {
		width: 960px;
		height: 700px;
		overflow: visible;
	}
</style>