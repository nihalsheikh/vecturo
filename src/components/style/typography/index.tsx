"use client";

import { TypographySection } from "@/redux/api/style-guide";
import { Info, Type } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from "@/components/ui/tooltip";

type Props = {
	typographyGuide: TypographySection[];
};

const StyleGuideTypography = ({ typographyGuide }: Props) => {
	return (
		<>
			{typographyGuide.length === 0 ? (
				<div className="text-center py-20">
					<Type className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
					<h3 className="text-lg font-medium text-foreground mb-2">
						No typography generated yet
					</h3>
					<p className="text-sm text-muted-foreground mb-6">
						Generate a style guide to see typography
						recommendations.
					</p>
				</div>
			) : (
				<div className="flex flex-col gap-10">
					{typographyGuide.map((section: any, index: number) => (
						<div key={index} className="flex flex-col gap-5">
							<div>
								<h3 className="text-lg font-medium text-foreground/50">
									{section.title}
								</h3>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{section.styles?.map(
									(style: any, styleIndex: number) => (
										<div
											key={styleIndex}
											className="p-6 rounded-2xl backdrop-blur-xl bg-black/5 border border-white/6 saturate-150"
										>
											<div className="space-y-4">
												<h4 className="text-lg font-medium text-foreground mb-1">
													{style.name}
												</h4>

												{style.description && (
													<div className="flex text-xs text-muted-foreground">
														<p className="flex justify-between items-center">
															{style.description}
															&nbsp;
															<Tooltip>
																<TooltipTrigger
																	asChild
																>
																	<Info className="w-3.5 h-3.5 text-muted-foreground hover:text-white" />
																</TooltipTrigger>
																<TooltipContent>
																	<div className="font-mono font-semibold px-2 py-2 mx-auto flex-wrap">
																		<p className="mb-1">
																			Font:{" "}
																			{
																				style.fontFamily
																			}{" "}
																		</p>

																		<p className="mb-1">
																			Size:{" "}
																			{
																				style.fontSize
																			}{" "}
																		</p>

																		<p className="mb-1">
																			Weight:{" "}
																			{
																				style.fontWeight
																			}{" "}
																		</p>

																		<p className="mb-1">
																			Line
																			Height:{" "}
																			{
																				style.lineHeight
																			}{" "}
																		</p>
																		{style.letterSpacing && (
																			<div>
																				Letter
																				Spacing:{" "}
																				{
																					style.letterSpacing
																				}
																			</div>
																		)}
																	</div>
																</TooltipContent>
															</Tooltip>
														</p>
													</div>
												)}
											</div>

											<div
												className="text-foreground mt-4"
												style={{
													fontFamily:
														style.fontFamily,
													fontSize: style.fontSize,
													fontWeight:
														style.fontWeight,
													lineHeight:
														style.lineHeight,
													letterSpacing:
														style.letterSpacing ||
														"normal",
												}}
											>
												The quick brown fox jumps over
												the lazy dog
											</div>
										</div>
									)
								)}
							</div>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default StyleGuideTypography;
