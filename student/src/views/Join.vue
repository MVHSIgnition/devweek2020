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
											style="position: relative"
										></v-text-field>
										<transition name="fade">
											<p v-if="error" class="red--text" style="position: absolute; top: 130px; margin: 0; padding: 0;">*invalid code</p>
										</transition>
										<v-btn @click="join" block color="primary" x-large>Join</v-btn>
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
			error: false
		}
	},
	computed: {
		...mapState(['firstName', 'lastName', 'profilePic', 'email'])
	},
	methods: {
		join() {

			this.client = this.$client.createInstance('4b7e608f84004ea2acd537eda95f6bf8'); 

			this.client.login({ token: null, uid: this.email}).then(() => {
			this.client.getChannelMemberCount([this.code]).then((result) => {
				var lecCode = this.code;
				console.log("Channel member count: " + Object.values(result)[0]);
				if(Object.values(result)[0] > 0) {
					this.$router.push({ path: '/lecture?code=' + this.code });
				} else {
					this.error = true;
					console.log("invalid");
				}
			});
			}).catch(err => {
				console.log('AgoraRTM client login failure', err);
			});
			
		}
	},
	created() {
		this.$emit('code', this.code);
	}
}
</script>

<style scoped>

	#error {
		position: absolute;
		top: 0px;
		left: 0px;
	}

</style>
