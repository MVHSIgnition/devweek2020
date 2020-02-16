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
						<v-card-title>
							<span class="title font-weight-light">Join Lecture</span>
						</v-card-title>

						<v-card-text>
							<v-form>
								<v-row align="center" justify="center">
									<v-col cols="12" sm="10">
										<v-text-field
											label="5-digit code"
											outlined
											v-model="code"
										></v-text-field>
										<v-btn @click="join" block color="primary" x-large>Join</v-btn>
									</v-col>
								</v-row>
								<v-row align="center" justify="center">
									<v-col cols="12" sm="10">
										
									</v-col>
								</v-row>
							</v-form>

							<v-list-item class="grow">
								<v-list-item-avatar>
									<v-img v-bind:src="profilePic"></v-img>
								</v-list-item-avatar>

								<v-list-item-content>
									<v-list-item-title>{{ firstName + " " + lastName }}</v-list-item-title>
								</v-list-item-content>
							</v-list-item>
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
	},
	created() {
		this.$emit('code', this.code);
	}
}
</script>
