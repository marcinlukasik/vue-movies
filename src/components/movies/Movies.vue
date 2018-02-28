<template>
    <div class="container mt-5">
        <div class="row">
            <div class="col-12">
                <div class="row">
                    <div class="col-md-8">
                        <h1>{{ movie.header }} <small>({{ movie.year }})</small></h1>
                        <p><strong>Stars:</strong> {{ (movie.stars) ? movie.stars.join(', ') : '' }}</p>
                    </div>
                    <div class="col-md-4">
                        <ul class="list-details">
                            <li><i class="fa fa-eye" aria-hidden="true"></i> <strong>Reviews:</strong> {{ movie.reviews }}</li>
                            <li><i class="fa fa-comments" aria-hidden="true"></i> <strong>Comments:</strong> {{ movie.comments }}</li>
                        </ul>
                    </div>
                </div>
                <hr>
                <p><strong>{{ movie.description }}</strong></p>
            </div>
        </div>
    </div>
</template>

<script>
	export default {
		computed: {
            movie () {
	        	return this.$store.getters.activeMovie;
			}
        }
	}
</script>

<style lang="scss" scoped>
    @import '../../assets/scss/list';
</style>
