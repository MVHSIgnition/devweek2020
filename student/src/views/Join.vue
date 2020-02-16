<template>
	<v-content>
		<v-container
			class="fill-height"
			fluid
		>
			<v-row
				align="center"
				justify="center"
			>
				<v-col
					cols="6"
					sm="8"
					md="8"
				>
					<v-card>
						<v-toolbar
							color="primary"
							dark
							flat
						>
							<v-toolbar-title>Join A Lecture</v-toolbar-title>
						</v-toolbar>

						<v-card-text>
							<br>
							<v-row align="center" justify="center">
								<v-avatar>
									<img v-bind:src="profilePic" />
								</v-avatar>
							</v-row>
							<v-row align="center" justify="center">
								<p>Welcome back, <b>{{ firstName }}</b>!</p>
							</v-row>
							<br>
							<h2 style="color: black; text-align: center;">Enter your 5-digit code below</h2>
							<v-form>
								<v-row align="center" justify="center">
									<v-col cols="12" sm="10">
										<v-text-field
											label="5-digit code"
											outlined
											v-model="code"
										></v-text-field>
									</v-col>
								</v-row>
							</v-form>
							<br>
							<div class="text-center">
								<v-btn @click="join" rounded color="primary" x-large>Join</v-btn>
							</div>
							<br>
						</v-card-text>

					</v-card>
				</v-col>
			</v-row>
		</v-container>
	</v-content>
</template>

<script>
import { mapState } from 'vuex';

export default {
	name: "Join",
	data() {
		return {
			code: '',
		}
	},
	computed: {
		...mapState(['firstName', 'lastName', 'profilePic'])
	},
	methods: {
		join() {
			this.$router.push({ path: '/lecture?code=' + this.code });
		}
	}
}
</script>
